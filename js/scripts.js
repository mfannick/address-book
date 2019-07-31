


// // business logic
// function Contact(first,last){
//     this.firstName=first;
//     this.lastName=last;
//     this.adresses=[];

// }

// // user interface logic
// var jane=new Contact('jane','Njeri')
// // console.log(jane)

// function address(street,city,country){
//     this.street=street;
//     this.city=city;
//     this.country=country;
//  }

// var home=new address("671 Ngong Road", "Nairobi", "Nairobi");

// // console.log(jane)
// console.log(home)
// jane.addresses.push(home);
// console.log(jane)
// console.log(jane.addresses[0])

    
/*************************Monday: Address Book with Constructors**************************/
// business logic
function Contact(first,last){
this.firstName=first;
this.lastName=last;
this.addresses=[];
};

function Address(street,city,country){
    this.street=street;
    this.city=city;
    this.country=country;
}
Address.prototype.fullAddress = function() {
    return this.street + ", " + this.city + ", " + this.country;
  }

Contact.prototype.fullName=(function(){
    return this.firstName+" "+this.lastName
});

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-country").val("");
}

// user interface logic
$(document).ready(function(){
$("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-country">Country</label>' +
                                   '<input type="text" class="form-control new-country">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedCountry = $(this).find("input.new-country").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCountry)
      newContact.addresses.push(newAddress)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      // $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        // $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.country + "</li>");
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");
    // $("input.new-street").val("");
    // $("input.new-city").val("");
    // $("input.new-country").val("");
    resetFields();

  });
});





