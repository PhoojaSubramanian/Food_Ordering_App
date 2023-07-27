package com.food_ordering_app.backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class DeliveryDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int del_id;
	@Column(name="delivery_man_id", nullable = false)
	private int delivery_man_id;
	@Column(name="delivery_order_id", nullable = false)
	private int delivery_order_id;
	@Column(name="delivery_payment_id", nullable = false)
	private int delivery_payment_id;
	@Column(name="delivery_customer_id", nullable = false)
	private int delivery_customer_id;

	public DeliveryDetails()
	{
		
	}

	public DeliveryDetails( int delivery_man_id, int delivery_order_id, int delivery_payment_id,
			int delivery_customer_id) {
		super();
		this.delivery_man_id = delivery_man_id;
		this.delivery_order_id = delivery_order_id;
		this.delivery_payment_id = delivery_payment_id;
		this.delivery_customer_id = delivery_customer_id;
	}

	public int getDel_id() {
		return del_id;
	}

	public void setDel_id(int del_id) {
		this.del_id = del_id;
	}

	public int getDelivery_man_id() {
		return delivery_man_id;
	}

	public void setDelivery_man_id(int delivery_man_id) {
		this.delivery_man_id = delivery_man_id;
	}

	public int getDelivery_order_id() {
		return delivery_order_id;
	}

	public void setDelivery_order_id(int delivery_order_id) {
		this.delivery_order_id = delivery_order_id;
	}

	public int getDelivery_payment_id() {
		return delivery_payment_id;
	}

	public void setDelivery_payment_id(int delivery_payment_id) {
		this.delivery_payment_id = delivery_payment_id;
	}

	public int getDelivery_customer_id() {
		return delivery_customer_id;
	}

	public void setDelivery_customer_id(int delivery_customer_id) {
		this.delivery_customer_id = delivery_customer_id;
	}
	
}
