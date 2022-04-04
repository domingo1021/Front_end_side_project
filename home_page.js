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
    // 每一小時過後紀錄總觀看人數，之後分析的時候只要將array的數字相剪即可
    alert("Alerted !")
    customer_hours_count.push(accumulate_customer-customer_hours_count[customer_hours_count.length-1]);
}

function show_hourly_customer(){
    document.getElementById('textlistn').style.display=(document.getElementById('textlistn').style.display=='none')?'block':'none';
    if (document.getElementById('textlistn').style.display=='block'){
        let string = "";
        for(var i=0; i<customer_hours_count.length; i++){
            if(i != customer_hours_count.length-1){
                string += customer_hours_count[i]+" => ";
            }else{
                string += customer_hours_count[i];
            }
        }
        document.getElementById("hourly_customer").innerText = string
    }
}


