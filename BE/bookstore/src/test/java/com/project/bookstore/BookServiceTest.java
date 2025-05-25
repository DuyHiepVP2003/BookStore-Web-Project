package com.project.bookstore;

import com.project.bookstore.models.Book;
import com.project.bookstore.repositories.BookRepository;
import com.project.bookstore.services.BookService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class BookServiceTest {

    @Mock
    private BookRepository bookRepository;

    @InjectMocks
    private BookService bookService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindAll() {
        List<Book> books = Arrays.asList(new Book(), new Book());
        when(bookRepository.findAll()).thenReturn(books);

        List<Book> result = bookService.findAll();

        assertEquals(books, result);
    }

    @Test
    void testFindById_BookExists() {
        Book book = new Book();
        book.setId(1L);
        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));

        Optional<Book> result = bookService.findById(1L);

        assertTrue(result.isPresent());
        assertEquals(book, result.get());
    }

    @Test
    void testFindById_BookNotExists() {
        when(bookRepository.findById(1L)).thenReturn(Optional.empty());

        Optional<Book> result = bookService.findById(1L);

        assertFalse(result.isPresent());
    }

    @Test
    void testSave() {
        Book book = new Book();
        when(bookRepository.save(any(Book.class))).thenReturn(book);

        Book result = bookService.save(book);

        assertEquals(book, result);
    }

    @Test
    void testDeleteById() {
        doNothing().when(bookRepository).deleteById(1L);

        bookService.deleteById(1L);

        verify(bookRepository).deleteById(1L);
    }
} 