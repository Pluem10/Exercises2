const { Customer, DiscountRate, Visit } = require("./Ex5");

// สร้างลูกค้าใหม่
const customer = new Customer("Nabnoeyy", true, "premium");
console.log(customer.toString());

// สร้างการเยี่ยมชมใหม่
const visit = new Visit(customer, new Date(), 459, 325);

// คำนวณส่วนลด
const serviceDiscount = DiscountRate.getServiceDiscountRate(customer.getMemberType()) * visit.getServiceExpense();
const productDiscount = DiscountRate.getProductDiscountRate(customer.getMemberType()) * visit.getProductExpense();

// คำนวณค่าใช้จ่ายหลังส่วนลด
const discountedServiceExpense = visit.getServiceExpense() - serviceDiscount;
const discountedProductExpense = visit.getProductExpense() - productDiscount;
const totalExpenseAfterDiscount = discountedServiceExpense + discountedProductExpense;

// แสดงผลการคำนวณ
console.log("Service Discount:", serviceDiscount.toFixed(2));
console.log("Product Discount:", productDiscount.toFixed(2));
console.log("Service Expense After Discount:", discountedServiceExpense.toFixed(2));
console.log("Product Expense After Discount:", discountedProductExpense.toFixed(2));
console.log("Total Expense After Discount:", totalExpenseAfterDiscount.toFixed(2));
