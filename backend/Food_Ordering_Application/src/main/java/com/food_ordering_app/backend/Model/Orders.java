package com.food_ordering_app.backend.Model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int order_id;
	@Column(name="order_customer_id" , nullable = false)
	private int order_customer_id;
	@Column(name="order_delivery_id" , nullable = false)
	private int order_delivery_id;
	@Column(name="order_restaurant_id", nullable = false)
	private int order_restaurant_id;
	@Column(name="order_payment_id", nullable = false)
	private int order_payment_id;
	@Column(name="order_date" , nullable = false)
	private String order_date;
	@Column(name="order_address" , nullable = false)
	private String order_address;
	@Column(name="order_amount" , nullable = false)
	private int order_amount;
	@Column(name="order_status" , nullable = false)
	private boolean order_status;
	
	public Orders()
	{
		
	}

	public Orders( int order_customer_id, int order_delivery_id, int order_restaurant_id,
			int order_payment_id, String order_date, String order_address, int order_amount , boolean order_status) {
		super();
		this.order_customer_id = order_customer_id;
		this.order_delivery_id = order_delivery_id;
		this.order_restaurant_id = order_restaurant_id;
		this.order_payment_id = order_payment_id;
		this.order_date = order_date;
		this.order_address = order_address;
		this.order_amount = order_amount;
		this.order_status=order_status;
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public int getOrder_customer_id() {
		return order_customer_id;
	}

	public void setOrder_customer_id(int order_customer_id) {
		this.order_customer_id = order_customer_id;
	}

	public int getOrder_delivery_id() {
		return order_delivery_id;
	}

	public void setOrder_delivery_id(int order_delivery_id) {
		this.order_delivery_id = order_delivery_id;
	}

	public int getOrder_restaurant_id() {
		return order_restaurant_id;
	}

	public void setOrder_restaurant_id(int order_restaurant_id) {
		this.order_restaurant_id = order_restaurant_id;
	}

	public int getOrder_payment_id() {
		return order_payment_id;
	}

	public void setOrder_payment_id(int order_payment_id) {
		this.order_payment_id = order_payment_id;
	}

	public String getOrder_date() {
		return order_date;
	}

	public void setOrder_date(String order_date) {
		this.order_date = order_date;
	}

	public String getOrder_address() {
		return order_address;
	}

	public void setOrder_address(String order_address) {
		this.order_address = order_address;
	}

	public int getOrder_amount() {
		return order_amount;
	}

	public void setOrder_amount(int order_amount) {
		this.order_amount = order_amount;
	}

	public boolean isOrder_status() {
		return order_status;
	}

	public void setOrder_status(boolean order_status) {
		this.order_status = order_status;
	}
	
	

}
