package com.food_ordering_app.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food_ordering_app.backend.Model.Restaurant;
import com.food_ordering_app.backend.Repository.RestaurantRepo;

import jakarta.transaction.Transactional;

@Service
public class RestaurantService {

	@Autowired
	private RestaurantRepo rest_repo;
	public Restaurant getRestaurant(int id) {
		return rest_repo.findById(id).get();
	}
	
	@Transactional
	public boolean addRestaurant(Restaurant rest) {
		return (rest_repo.save(rest) != null) ? true : false;
	}

	public boolean updateRestaurant(Restaurant rest) {
		return (rest_repo.saveAndFlush(rest) != null) ? true : false;
	}

	public boolean deleteRestaurantById(int id) {
		if (rest_repo.findById(id).isPresent()) {
            rest_repo.deleteById(id);
            return true;
        }
        return false;
	}

	public List<Restaurant> getRestaurantAll() {
		return rest_repo.findAll();
	}

}
