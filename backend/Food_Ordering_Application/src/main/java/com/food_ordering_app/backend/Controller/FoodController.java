package com.food_ordering_app.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.food_ordering_app.backend.Model.Food;
import com.food_ordering_app.backend.Service.FoodService;



@RestController
@CrossOrigin(origins="http://localhost:3000")
public class FoodController {
	
	@Autowired
	private FoodService food_ser;

	@GetMapping("/Food/{id}")
	public Food getFood(@PathVariable int id) {
        return food_ser.getFood(id);
    }
	
	@GetMapping("/FoodAll")
	public List<Food> getFoodAll() {
        return food_ser.getFoodAll();
    }

	@PostMapping("/addFood")
	 public String addFood(@RequestBody Food food) {
        return (food_ser.addFood(food)) ? "Food added successfully" : "Food not added";
    }
	
	@PutMapping("/editFood/{id}")
    public String updateFood(@PathVariable int id, @RequestBody Food food) {
		 return (food_ser.updateFood(food)) ? "Food updated successfully" : "Food not updated";
    }
	
	 @DeleteMapping("/Food/{id}")
	    public String deleteFood(@PathVariable int id) {
	        return (food_ser.deleteFoodById(id)) ? "Food deleted successfully" : "Failed to delete Food";
	    }

}
