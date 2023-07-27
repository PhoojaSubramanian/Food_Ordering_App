package com.food_ordering_app.backend.Model;

import java.math.BigInteger;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Restaurant_Owner {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int restaurant_owner_id;
	@Column(name ="restaurant_owner_name" , nullable = false , length = 50 )
	private String restaurant_owner_name;
	@Column(name = "restaurant_owner_password " ,nullable = false, length= 50)
	private String restaurant_owner_password;
	@Column(name = "restaurant_owner_email", nullable = false)
	private String restaurant_owner_email;
	@Column(name = "restaurant_owner_phoneNumber" , nullable = false)
	private BigInteger restaurant_owner_phoneNumber;
	
	public Restaurant_Owner()
	{
		
	}
	
	public Restaurant_Owner( String restaurant_owner_name, String restaurant_owner_password,
			String restaurant_owner_email, BigInteger restaurant_owner_phoneNumber) {
		super();
		this.restaurant_owner_name = restaurant_owner_name;
		this.restaurant_owner_password = restaurant_owner_password;
		this.restaurant_owner_email = restaurant_owner_email;
		this.restaurant_owner_phoneNumber = restaurant_owner_phoneNumber;
	}
	
	
	public int getRestaurant_owner_id() {
		return restaurant_owner_id;
	}
	public void setRestaurant_owner_id(int restaurant_owner_id) {
		this.restaurant_owner_id = restaurant_owner_id;
	}
	public String getRestaurant_owner_name() {
		return restaurant_owner_name;
	}
	public void setRestaurant_owner_name(String restaurant_owner_name) {
		this.restaurant_owner_name = restaurant_owner_name;
	}
	public String getRestaurant_owner_password() {
		return restaurant_owner_password;
	}
	public void setRestaurant_owner_password(String restaurant_owner_password) {
		this.restaurant_owner_password = restaurant_owner_password;
	}
	public String getRestaurant_owner_email() {
		return restaurant_owner_email;
	}
	public void setRestaurant_owner_email(String restaurant_owner_email) {
		this.restaurant_owner_email = restaurant_owner_email;
	}
	public BigInteger getRestaurant_owner_phoneNumber() {
		return restaurant_owner_phoneNumber;
	}
	public void setRestaurant_owner_phoneNumber(BigInteger restaurant_owner_phoneNumber) {
		this.restaurant_owner_phoneNumber = restaurant_owner_phoneNumber;
	}
	
}
