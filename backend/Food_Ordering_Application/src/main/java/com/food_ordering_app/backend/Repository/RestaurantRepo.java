package com.food_ordering_app.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food_ordering_app.backend.Model.Restaurant;

public interface RestaurantRepo extends JpaRepository<Restaurant, Integer> {

}
