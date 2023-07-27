package com.food_ordering_app.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food_ordering_app.backend.Model.Food;
import com.food_ordering_app.backend.Repository.FoodRepo;

@Service
public class FoodService {

	@Autowired
	 private FoodRepo food_repo;
	public Food getFood(int id) {
		return food_repo.findById(id).get();
	}

	public List<Food> getFoodAll() {
		return food_repo.findAll();
	}

	public boolean addFood(Food food) {
		return (food_repo.save(food) != null) ? true : false;
	}

	public boolean updateFood(Food food) {
		return (food_repo.saveAndFlush(food) != null) ? true : false;
	}

	public boolean deleteFoodById(int id) {
		if (food_repo.findById(id).isPresent()) {
            food_repo.deleteById(id);
            return true;
        }
        return false;
	}

}
