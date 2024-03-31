package com.project.bookstore.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long publicYear;
    private String language;
    private String weight;
    private String size;
    private Integer pageNumber;
    private String form;
    private String image;
    private String price;
    private String discount;
    private Integer ageMin;
    private String description;
    private Integer quantity;
    private Integer sellQuantity;
    @ManyToOne
    @JoinColumn(name = "author_id", nullable = true)
    private Author author;
    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private Publisher publisher;
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = true)
    private Category category;
}
