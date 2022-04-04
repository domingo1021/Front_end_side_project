let day = new Date();
document.getElementById("today").innerText += " "+day.getFullYear()+"." +day.getMonth()+"."+day.getDate();

var customer_hours_count = [0];
current_customer_num = 0;
accumulate_customer = 0;

customer_counter = document.getElementById("customer_count");
customer_count.innerText = current_customer_num;
accumulate_customer_counter = document.getElementById("cumulative_customer");
accumulate_customer_counter.innerText += " "+accumulate_customer;

function increment_customer(){
    current_customer_num += 1;
    accumulate_customer += 1;
    customer_counter.innerText = current_customer_num;
    accumulate_customer_counter.innerText = `We have cumulative customers for: ${accumulate_customer}`;

    
}

function decrease_customer(){
    if (current_customer_num>0){
        current_customer_num -= 1;
    }
    
    customer_counter.innerText = current_customer_num;
}



function new_hour_index(){
    customer_hours_count.push(accumulate_customer);
    if (document.getElementById('textlistn').style.display=='block'){
        draw_customer_table();
    }
    alert("Added !");
}

function show_hourly_customer(){
    document.getElementById('textlistn').style.display=(document.getElementById('textlistn').style.display=='none')?'block':'none';
    draw_customer_table();
}

function draw_customer_table(){
    if (document.getElementById('textlistn').style.display=='block'){  
        let myTableDiv = document.getElementById("textlistn");
        myTableDiv.innerHTML=""
        let table = document.createElement('TABLE');
        let pure_text=["Work hour", "Number of customer"]
        table.border = "1";
        table.align = "center";

        let tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
    
        for (var i = 0; i < customer_hours_count.length; i++) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);
    
            for (var j = 0; j < 2; j++) {
                let td = document.createElement('TD');
                let th = document.createElement('TH');
                td.width = '200px';
                th.width = '200px';
                if (i===0){
                    th.appendChild(document.createTextNode(pure_text[j]));
                    tr.appendChild(th);
                }else{
                    if (j===0){
                        td.appendChild(document.createTextNode(8+i+"點"));
                        tr.appendChild(td);
                    }else{
                        td.appendChild(document.createTextNode(customer_hours_count[i]-customer_hours_count[i-1]));
                        tr.appendChild(td); 
                    }
                }
            }
        }
        myTableDiv.appendChild(table);
    }
}


