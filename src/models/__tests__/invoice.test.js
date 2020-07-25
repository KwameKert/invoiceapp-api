const Invoice = require('../Invoice');


const invoice = {
    
    receiverName:  'Thomas Adjei',
    senderName: 'Hyve Concepts',
    receiverMail: 'tomadjei@gmail.com',
    senderMail: 'hye@gmail.com',
    description: 'Invoice for project ',
    amount: 454,
    currency: 'cedis',
    notes: 'Urgent ',
    items: [
        {name: 'pen',quantity: 5,unitPrice: 2 },
        {name: 'book',quantiy: 10, unitPrice: 30}
    ]
    
}


test("create and save invoice" , async()=>{

    let newInvoice = new Invoice(invoice);
    let savedInvoice = await newInvoice.save();

    expect(savedInvoice._id).toBeDefined();
    expect(savedInvoice.receiver).toBe(newInvoice.receiver);

})
