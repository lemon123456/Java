package com.example.bookish.controller;

import com.example.bookish.model.Book;
import com.example.bookish.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping(method = RequestMethod.GET)
    public Page<Book> getAll(@RequestParam(value="page", defaultValue = "0") Integer page){
        Sort sort = new Sort(Sort.Direction.DESC, "id");
        Pageable pageable = new PageRequest(page, 6, sort);
        return bookService.getAll(pageable);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Book getBookById(@PathVariable long id) {
        return bookService.getById(id);
    }

}
