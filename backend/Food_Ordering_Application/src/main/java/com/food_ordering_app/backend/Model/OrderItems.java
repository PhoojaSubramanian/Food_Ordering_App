package com.food_ordering_app.backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class OrderItems {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderItem_id;
	@Column(name="orderItem_order_id" , nullable=false)
	private int orderItem_order_id;
	@Column(name="order_food_id", nullable=false)
	private int order_food_id;
	@Column(name="order_quantity", nullable=false)
	private int order_quantity;
	@Column(name="order_total", nullable=false)
	private int order_total;
	
	public OrderItems()
	{
		
	}

	public OrderItems( int orderItem_order_id, int order_food_id, int order_quantity,
			int order_total) {
		super();
		this.orderItem_order_id = orderItem_order_id;
		this.order_food_id = order_food_id;
		this.order_quantity = order_quantity;
		this.order_total = order_total;
	}

	public int getOrderItem_id() {
		return orderItem_id;
	}

	public void setOrderItem_id(int orderItem_id) {
		this.orderItem_id = orderItem_id;
	}

	public int getOrderItem_order_id() {
		return orderItem_order_id;
	}

	public void setOrderItem_order_id(int orderItem_order_id) {
		this.orderItem_order_id = orderItem_order_id;
	}

	public int getOrder_food_id() {
		return order_food_id;
	}

	public void setOrder_food_id(int order_food_id) {
		this.order_food_id = order_food_id;
	}

	public int getOrder_quantity() {
		return order_quantity;
	}

	public void setOrder_quantity(int order_quantity) {
		this.order_quantity = order_quantity;
	}

	public int getOrder_total() {
		return order_total;
	}

	public void setOrder_total(int order_total) {
		this.order_total = order_total;
	}
	
}
