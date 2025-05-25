package com.project.bookstore;

import com.project.bookstore.controllers.BookController;
import com.project.bookstore.models.Book;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.BookService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class BookControllerTest {

    @Mock
    private BookService bookService;

    @InjectMocks
    private BookController bookController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllBooks() {
        List<Book> books = Arrays.asList(new Book(), new Book());
        when(bookService.findAll()).thenReturn(books);

        ResponseEntity<ResponseObject> response = bookController.getAllBooks();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        assertEquals(books, response.getBody().getData());
    }

    @Test
    void testGetBookById_BookExists() {
        Book book = new Book();
        book.setId(1L);
        when(bookService.findById(1L)).thenReturn(Optional.of(book));

        ResponseEntity<ResponseObject> response = bookController.getBookById(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        assertEquals(book, response.getBody().getData());
    }

    @Test
    void testGetBookById_BookNotExists() {
        when(bookService.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<ResponseObject> response = bookController.getBookById(1L);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
    }

    @Test
    void testCreateBook() {
        Book book = new Book();
        when(bookService.save(any(Book.class))).thenReturn(book);

        ResponseEntity<ResponseObject> response = bookController.createBook(book);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
    }

    @Test
    void testUpdateBook_BookExists() {
        Book book = new Book();
        book.setId(1L);
        when(bookService.findById(1L)).thenReturn(Optional.of(book));
        when(bookService.save(any(Book.class))).thenReturn(book);

        ResponseEntity<ResponseObject> response = bookController.updateBook(1L, book);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
    }

    @Test
    void testUpdateBook_BookNotExists() {
        when(bookService.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<ResponseObject> response = bookController.updateBook(1L, new Book());

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
    }

    @Test
    void testDeleteBook_BookExists() {
        Book book = new Book();
        book.setId(1L);
        when(bookService.findById(1L)).thenReturn(Optional.of(book));

        ResponseEntity<ResponseObject> response = bookController.deleteBook(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        verify(bookService).deleteById(1L);
    }

    @Test
    void testDeleteBook_BookNotExists() {
        when(bookService.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<ResponseObject> response = bookController.deleteBook(1L);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
    }
} 