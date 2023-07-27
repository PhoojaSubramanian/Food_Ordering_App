package com.food_ordering_app.backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int payment_id;
	@Column(name="payment_order_id",nullable = false)
	private int payment_order_id;
	@Column(name="payment_date" , nullable = false)
	private String payment_date;
	@Column(name="payment_amount" , nullable = false)
	private int payment_amount;
	@Column(name="payment_method" , nullable = false)
	private String payment_method;
	@Column(name="payment_status" , nullable = false)
	private boolean payment_status;
	@Column(name="transaction_id" , nullable = false)
	private int transaction_id;
	@Column(name="cust_id", nullable = false)
	private int cust_id;
	
	public Payment() {
		
	}

	public Payment( int payment_order_id, String payment_date, int payment_amount, String payment_method,
			boolean payment_status, int transaction_id , int cust_id) {
		super();
		this.payment_order_id = payment_order_id;
		this.payment_date = payment_date;
		this.payment_amount = payment_amount;
		this.payment_method = payment_method;
		this.payment_status = payment_status;
		this.transaction_id = transaction_id;
		this.cust_id=cust_id;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public int getPayment_order_id() {
		return payment_order_id;
	}

	public void setPayment_order_id(int payment_order_id) {
		this.payment_order_id = payment_order_id;
	}

	public String getPayment_date() {
		return payment_date;
	}

	public void setPayment_date(String payment_date) {
		this.payment_date = payment_date;
	}

	public int getPayment_amount() {
		return payment_amount;
	}

	public void setPayment_amount(int payment_amount) {
		this.payment_amount = payment_amount;
	}

	public String getPayment_method() {
		return payment_method;
	}

	public void setPayment_method(String payment_method) {
		this.payment_method = payment_method;
	}

	public boolean isPayment_status() {
		return payment_status;
	}

	public void setPayment_status(boolean payment_status) {
		this.payment_status = payment_status;
	}

	public int getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(int transaction_id) {
		this.transaction_id = transaction_id;
	}

	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	
	
}
