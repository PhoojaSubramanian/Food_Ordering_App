package com.food_ordering_app.backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class cartItems {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartItem_id;
	@Column(name="item_cart_id", nullable = false)
	private int item_cart_id;
	@Column(name="item_food_id", nullable = false)
	private int item_food_id;
	@Column(name="item_quantity", nullable = false)
	private int item_quantity;
	
	public cartItems()
	{
		
	}

	public cartItems( int item_cart_id, int item_food_id, int item_quantity) {
		super();
		this.item_cart_id = item_cart_id;
		this.item_food_id = item_food_id;
		this.item_quantity = item_quantity;
	}

	public int getCartItem_id() {
		return cartItem_id;
	}

	public void setCartItem_id(int cartItem_id) {
		this.cartItem_id = cartItem_id;
	}

	public int getItem_cart_id() {
		return item_cart_id;
	}

	public void setItem_cart_id(int item_cart_id) {
		this.item_cart_id = item_cart_id;
	}

	public int getItem_food_id() {
		return item_food_id;
	}

	public void setItem_food_id(int item_food_id) {
		this.item_food_id = item_food_id;
	}

	public int getItem_quantity() {
		return item_quantity;
	}

	public void setItem_quantity(int item_quantity) {
		this.item_quantity = item_quantity;
	}
	

}
