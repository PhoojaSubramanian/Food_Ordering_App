package com.food_ordering_app.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food_ordering_app.backend.Model.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {

}
