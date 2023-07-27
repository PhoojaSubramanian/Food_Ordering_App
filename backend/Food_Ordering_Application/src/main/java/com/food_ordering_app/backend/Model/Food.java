package com.food_ordering_app.backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Food {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int food_id;
	@Column(name ="food_name" , nullable = false)
	private String food_name;
	@Column(name = "food_restaurant_id" , nullable = false)
	private int food_restaurant_id;
	@Column(name ="food_price" , nullable = false)
	private int food_price;
	@Column(name="food_rating")
	private int food_rating;
	@Column(name ="food_description" , nullable = false)
	private String food_description;
	@Column(name="food_type"  , nullable = false)
	private String food_type;
	@Lob
	@Column(name="food_image" , columnDefinition = "LONGTEXT")
	private String food_image;
	@Column(name="discount")
	private int discount;
	
	public Food()
	{
		
	}
	public Food( String food_name, int food_restaurant_id, int food_price, int food_rating,
			String food_description, String food_type, String food_image , int discount) {
		super();
		this.food_name = food_name;
		this.food_restaurant_id = food_restaurant_id;
		this.food_price = food_price;
		this.food_rating = food_rating;
		this.food_description = food_description;
		this.food_type = food_type;
		this.food_image = food_image;
		this.discount=discount;
	}
	public int getFood_id() {
		return food_id;
	}
	public void setFood_id(int food_id) {
		this.food_id = food_id;
	}
	public String getFood_name() {
		return food_name;
	}
	public void setFood_name(String food_name) {
		this.food_name = food_name;
	}
	public int getFood_restaurant_id() {
		return food_restaurant_id;
	}
	public void setFood_restaurant_id(int food_restaurant_id) {
		this.food_restaurant_id = food_restaurant_id;
	}
	public int getFood_price() {
		return food_price;
	}
	public void setFood_price(int food_price) {
		this.food_price = food_price;
	}
	public int getFood_rating() {
		return food_rating;
	}
	public void setFood_rating(int food_rating) {
		this.food_rating = food_rating;
	}
	public String getFood_description() {
		return food_description;
	}
	public void setFood_description(String food_description) {
		this.food_description = food_description;
	}
	public String getFood_type() {
		return food_type;
	}
	public void setFood_type(String food_type) {
		this.food_type = food_type;
	}
	public String getFood_image() {
		return food_image;
	}
	public void setFood_image(String food_image) {
		this.food_image = food_image;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}

	
}
