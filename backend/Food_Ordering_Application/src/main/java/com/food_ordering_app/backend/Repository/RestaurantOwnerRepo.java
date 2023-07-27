package com.food_ordering_app.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food_ordering_app.backend.Model.Restaurant_Owner;

public interface RestaurantOwnerRepo extends JpaRepository<Restaurant_Owner, Integer> {

}
