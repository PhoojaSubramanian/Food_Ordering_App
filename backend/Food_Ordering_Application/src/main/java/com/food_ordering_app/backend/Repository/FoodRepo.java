package com.food_ordering_app.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food_ordering_app.backend.Model.Food;

public interface FoodRepo extends JpaRepository<Food, Integer> {

}
