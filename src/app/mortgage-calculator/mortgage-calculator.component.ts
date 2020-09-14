import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  mortgageForm;
  ready: boolean = false;
  payments: number = 0;
  mortgageAmount: number = 620000;
  interestRate: number = 5;
  amortizationPeriod: number = 25;
  paymentFrequency: number = 12;

  constructor(private formBuilder: FormBuilder) { 
    this.mortgageForm = this.formBuilder.group({
      mortgageAmount: this.mortgageAmount,
      interestRate: this.interestRate,
      amortizationPeriod: this.amortizationPeriod,
      paymentFrequency: this.paymentFrequency
    })
  }

  ngOnInit(): void {
  }

  calculatePayments(mortgageAmount:number, interestRate:number, amortizationPeriod:number, paymentFrequency:number) {
    let interestAmount: number = (mortgageAmount * (interestRate/100));
    let result: number = mortgageAmount + interestAmount;
    let yearlyPayment: number = result / amortizationPeriod;
    let payment: number = yearlyPayment / paymentFrequency;
    return payment;
  }

  onSubmit(mortgageData) {
    this.payments = this.calculatePayments(parseInt(mortgageData.mortgageAmount), parseInt(mortgageData.interestRate), parseInt(mortgageData.amortizationPeriod), parseInt(mortgageData.paymentFrequency));
    this.ready = true;
  }

}
