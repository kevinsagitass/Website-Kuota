var selectionBox1 = $("#selectionBox1");
var selectionBox2 = $("#selectionBox2");
var selectionBox3 = $("#selectionBox3");
var selectionBox4 = $("#selectionBox4");

// Hide Box 4
selectionBox4.css("display", "none");

// Populate Selection Box 1, 2, 3 First Load
for (let x = 0; x < data.length; x++) {

    $.each(data, function (i, box1) {
        selectionBox1.append($('<option>', { 
            value: box1.value,
            text : box1.label 
        }));
    });
}

let box1 = $.grep(data, function(item) {
    return item.value == selectionBox1.find(":selected").val();
});

$.each(box1[0].children, function (i, box2) {
    selectionBox2.append($('<option>', { 
        value: box2.value,
        text : box2.label 
    }));
});

$.each(box1[0].children[0].children, function (i, box3) {
    selectionBox3.append($('<option>', { 
        value: box3.value,
        text : box3.label 
    }));
});


function selection1Selected() {

    selectionBox2.empty();
    selectionBox3.empty();
    selectionBox4.empty();

    let value = selectionBox1.find(":selected").val();

    let box2Data = data.find(x => x.value == value).children;

    $.each(box2Data, function (i, box2) {

        selectionBox2.append($('<option>', { 
            value: box2.value,
            text : box2.label 
        }));

    });

    $.each(box2Data[0].children, function (j, box3) {

        selectionBox3.append($('<option>', { 
            value: box3.value,
            text : box3.label 
        }));
    });

    if (value == "paket internet" || value == "voucher internet") {

        selectionBox4.css("display", "block");

        $.each(box2Data[0].children[0].children, function (j, box4) {

            selectionBox4.append($('<option>', { 
                value: box4.value,
                text : box4.label 
            }));
        });

    } else {
        selectionBox4.css("display", "none");
    }
}

function selection2Selected() {

    selectionBox3.find('option').remove();
    selectionBox4.find('option').remove();

    let value1 = selectionBox1.find(":selected").val();
    let value2 = selectionBox2.find(":selected").val();

    let box3Data = data.find(x => x.value == value1).children.find(x => x.value == value2).children;

    $.each(box3Data, function (i, box3) {

        selectionBox3.append($('<option>', { 
            value: box3.value,
            text : box3.label 
        }));

    });

    if (value1 == "paket internet" || value1 == "voucher internet") {

        $.each(box3Data[0].children, function (j, box4) {

            selectionBox4.append($('<option>', { 
                value: box4.value,
                text : box4.label 
            }));
        });

    }
}

function selection3Selected() {

    selectionBox4.find('option').remove();

    let value1 = selectionBox1.find(":selected").val();
    let value2 = selectionBox2.find(":selected").val();
    let value3 = selectionBox3.find(":selected").val();

    if (value1 == "paket internet" || value1 == "voucher internet") {

        let box4Data = data.find(x => x.value == value1).children.find(x => x.value == value2).children.find(x => x.value == value3).children;

        $.each(box4Data, function (j, box4) {

            selectionBox4.append($('<option>', { 
                value: box4.value,
                text : box4.label 
            }));
        });

    }
}

function btnClick() {

    let value1 = selectionBox1.find(":selected").val();
    let value2 = selectionBox2.find(":selected").val();
    let value3 = selectionBox3.find(":selected").val();

    let url = "";
    if (value1 == "paket internet" || value1 == "voucher internet") {

        let value4 = selectionBox4.find(":selected").val();

        url = data.find(x => x.value == value1).children.find(x => x.value == value2).children.find(x => x.value == value3).children.find(x => x.value == value4).url;
    } else {
        url = data.find(x => x.value == value1).children.find(x => x.value == value2).children.find(x => x.value == value3).url;
    }

    window.location = url;
}