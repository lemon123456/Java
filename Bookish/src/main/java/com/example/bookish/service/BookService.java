package com.example.bookish.service;

import com.example.bookish.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BookService {
    Page<Book> getAll(Pageable pageable);

    Book getById(Long id);
}
