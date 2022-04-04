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
    alert("Added !");
}

function show_hourly_customer(){
    document.getElementById('textlistn').style.display=(document.getElementById('textlistn').style.display=='none')?'block':'none';
    if (document.getElementById('textlistn').style.display=='block'){
        let string = "";
        for(var i=0; i<customer_hours_count.length; i++){
            if(i !== customer_hours_count.length-1 && i !== 0){
                string += customer_hours_count[i] - customer_hours_count[i-1]+" => "
            }
            else if (i===0){
                string += customer_hours_count[i]+" => ";
            }else{
                string += customer_hours_count[i]-customer_hours_count[i-1];
            }
        }
        document.getElementById("hourly_customer").innerText = string;
    }
}


