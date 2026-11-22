
package com.careermate.backend.service;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.text.PDFTextStripper;

import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFTable;
import org.apache.poi.xwpf.usermodel.XWPFTableRow;
import org.apache.poi.xwpf.usermodel.XWPFTableCell;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Locale;

@Service
public class ResumeExtractionService {

    private static final long MAX_FILE_SIZE = 5L * 1024 * 1024;

    public String extractText(MultipartFile file) throws IOException {

        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException(
                    "Please upload a PDF or DOCX resume."
            );
        }

        if (file.getSize() > MAX_FILE_SIZE) {
            throw new IllegalArgumentException(
                    "Resume file must not exceed 5 MB."
            );
        }

        String filename = file.getOriginalFilename();

        if (filename == null) {
            throw new IllegalArgumentException(
                    "Invalid resume filename."
            );
        }

        String extension = filename.toLowerCase(Locale.ROOT);

        byte[] fileBytes = file.getBytes();

        String resumeText;

        if (extension.endsWith(".pdf")) {

            if (!hasPdfSignature(fileBytes)) {
                throw new IllegalArgumentException(
                        "The uploaded file is not a valid PDF."
                );
            }

            resumeText = extractPdfText(fileBytes);

        } else if (extension.endsWith(".docx")) {

            if (!hasZipSignature(fileBytes)) {
                throw new IllegalArgumentException(
                        "The uploaded file is not a valid DOCX document."
                );
            }

            resumeText = extractDocxText(fileBytes);

        } else {

            throw new IllegalArgumentException(
                    "Only PDF and DOCX files are supported."
            );
        }

        resumeText = resumeText.trim();

        if (resumeText.isBlank()) {
            throw new IllegalArgumentException(
                    "Could not extract text from this resume. Please try another file."
            );
        }

        return resumeText;
    }

    private boolean hasPdfSignature(byte[] bytes) {
        return bytes.length >= 5
                && bytes[0] == '%'
                && bytes[1] == 'P'
                && bytes[2] == 'D'
                && bytes[3] == 'F'
                && bytes[4] == '-';
    }

    private boolean hasZipSignature(byte[] bytes) {
        return bytes.length >= 4
                && bytes[0] == 'P'
                && bytes[1] == 'K';
    }

    private String extractPdfText(byte[] bytes) throws IOException {

        try (var document = Loader.loadPDF(bytes)) {

            PDFTextStripper stripper = new PDFTextStripper();

            return stripper.getText(document);
        }
    }

    private String extractDocxText(byte[] bytes) throws IOException {

        StringBuilder extractedText = new StringBuilder();

        try (XWPFDocument document =
                     new XWPFDocument(new ByteArrayInputStream(bytes))) {

            // Extract normal paragraphs.
            for (XWPFParagraph paragraph : document.getParagraphs()) {

                extractedText.append(paragraph.getText())
                        .append("\n");
            }

            // Also extract text stored inside tables.
            for (XWPFTable table : document.getTables()) {

                for (XWPFTableRow row : table.getRows()) {

                    for (XWPFTableCell cell : row.getTableCells()) {

                        extractedText.append(cell.getText())
                                .append(" ");
                    }

                    extractedText.append("\n");
                }
            }
        }

        return extractedText.toString();
    }
}
