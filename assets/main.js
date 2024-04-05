

    // let form=document.getElementById("getform")
   
// using the fecting method


    
    const api_url="https://api.dominos.co.in/locator-service/ve2/cities/CHENNAI/stores"

    const urlfetched = async ()=>{
        const fetched=await fetch(api_url);
        const jsondata=await fetched.json();
        return jsondata

    }
    
    


    urlfetched().then((data)=>{
        let h4=document.getElementById("h4")
        h4.addEventListener("click",()=>{
            const form=document.getElementById("form")
            
            h4.remove()
            form.remove()
            

            let y=0;
            if(y===0){
                let headingforcitydiv=document.getElementById("citynamesdiv")
                
                const placelistback=document.getElementById("headerdiv")
                const backbutton=document.createElement("p");
                backbutton.id="backbutton";
                backbutton.innerText="Back";
                placelistback.append(backbutton);
                backbutton.addEventListener("click",(event)=>{
                
                
                headingforcitydiv.style.display="block"
                window.location.reload("/")
                })

                
                
            };
            const array=[];
            for (let i=0;i<82;i++){
                const stringi= i.toString()
                
                const datafetched=(data.data[stringi].name);
                
                array.push({datafetched ,stringi})
                const citynamesdiv=document.getElementById("paradiv")
                const form=document.getElementById("form")
                const outputdiv=document.getElementById("output")
                
                
                
                // outputdiv.style.display="none";
                // citynamesdiv.style.width="80%"
                // citynamesdiv.style.height="870px"
                
                // form.style.display="none";
                body.style.backgroundColor="#FFF"
                

                
               
                if(datafetched ){
                    
                    let citynamesdiv=document.getElementById("paradiv")
                    
                    const newdiv=document.createElement("li");
                    newdiv.className="li"
                    newdiv.innerHTML=`<li>${datafetched}</li>`;
                    citynamesdiv.append(newdiv);
                     
                    
                 }

                 

                
                
             
                
                
             }
             let citynamesdiv=document.getElementById("paradiv")
             
             citynamesdiv.addEventListener("click",(event)=>{
                const fetchedlocation=event.target.innerText
                

               
                
                for (i of array){
                    if(i==fetchedlocation   ); {
                        const finalphonedata=data.data[i.stringi].phone
                        const finaladdressdata=data.data[i.stringi].address
                        const finaldeliveryEnabledata=data.data[i.stringi].deliveryEnable
                        const finalstoreOperationalTagdata=data.data[i.stringi].storeOperationalTag
                        
           
                        
                        const y=JSON.stringify(i.datafetched)
                       
                        const finaloutputdiv=document.getElementById("output");
                        const finaloutputlist=document.createElement("li")
                        finaloutputlist.className="finallists"
                        finaloutputlist.innerText=`Phone Number: ${finalphonedata}`
                        finaloutputdiv.append(finaloutputlist)
                        const finaloutputlist2=document.createElement("li")
                        finaloutputlist2.className="finallists"
                        
                        finaloutputlist2.innerText=`Address: ${finaladdressdata}`
                        finaloutputdiv.append(finaloutputlist2)
                        const finaloutputlist3=document.createElement("li")
                        finaloutputlist3.className="finallists"
                        finaloutputlist3.innerText=`Delivery: ${finaldeliveryEnabledata}`
                        finaloutputdiv.append(finaloutputlist3)
                        const finaloutputlist4=document.createElement("li")
                        finaloutputlist4.className="finallists"
                        finaloutputlist4.innerText=`Store: ${finalstoreOperationalTagdata}`
                        finaloutputdiv.append(finaloutputlist4)

                        const citynamesdiv=document.getElementById("citynamesdivision")
                        const outputdiv=document.getElementById("output")
                        // citynamesdiv.style.display="none"
                        citynamesdiv.remove()
                        const backbutton=document.getElementById("backbutton")
                        backbutton.remove()
                        outputdiv.style.display="block";
                        const header=document.getElementById("headerdiv")
                        const home=document.createElement("a")
                        home.setAttribute("href","index.html")
                        home.id="home"
                        home.innerText="Home"
                        header.append(home)
                        let maplink="https://www.google.com/maps/search/?api=1&query="
                        const finallinks=document.getElementById("finallinks")
                        const finaloutputlist5=document.createElement("a")
                        finaloutputlist5.className="finallink"
                        finaloutputlist5.setAttribute("href",maplink+y)
                        finaloutputlist5.innerText="Google Map : ",i.datafetched
                        finallinks.append(finaloutputlist5)
                        
                        break;
                    }

                    
                   
                     
                    }
                   
                
             
            })

           

                
        })
                    
        //setting listener to the backbutton

       
       
    //    getting_backbutton.addEventListener("click",()=>{
    //     const anchorback=document.getElementById("citynamesdiv");
        
    //    })
       
       
        
        

       


        // created the storing function
        const storing=()=>{
            let subbtn=document.getElementById("subbtn")
            let userrequest=document.getElementById("location")

        // got the input value from the form
    
            const location=userrequest.value
            const upperlocation=location.toUpperCase()
           
            
            const newdiv=document.createElement("li");
            newdiv.className="li"
            const newarray=[];
            for (let i=0;i<82;i++){
                const stringi= i.toString()
                const datafetched=(data.data[stringi].name);
                
                newarray.push({datafetched,stringi})
            
            }
            
            for (k of newarray){

                if (k.datafetched===upperlocation){
                    
                    
                    const y= JSON.stringify(k.datafetched)
                   
                    let maplink="https://www.google.com/maps/search/?api=1&query="
                    
                    const finalphonedata=data.data[k.stringi].phone
                    const finaladdressdata=data.data[k.stringi].address
                    const finaldeliveryEnabledata=data.data[k.stringi].deliveryEnable
                    const finalstoreOperationalTagdata=data.data[k.stringi].storeOperationalTag
                    
                    const finaloutputdiv=document.getElementById("output");
                    const finaloutputlist=document.createElement("li")
                    finaloutputlist.className="finallists"
                    finaloutputlist.innerText=`Phone Number: ${finalphonedata}`
                    finaloutputdiv.append(finaloutputlist)
                    const finaloutputlist2=document.createElement("li")
                    finaloutputlist2.className="finallists"
                    
                    finaloutputlist2.innerText=`Address: ${finaladdressdata}`
                    finaloutputdiv.append(finaloutputlist2)
                    const finaloutputlist3=document.createElement("li")
                    finaloutputlist3.className="finallists"
                    finaloutputlist3.innerText=`Delivery: ${finaldeliveryEnabledata}`
                    finaloutputdiv.append(finaloutputlist3)
                    const finaloutputlist4=document.createElement("li")
                    finaloutputlist4.className="finallists"
                    finaloutputlist4.innerText=`Store: ${finalstoreOperationalTagdata}`
                    finaloutputdiv.append(finaloutputlist4)
                    const finallinks=document.getElementById("finallinks")
                    const finaloutputlist5=document.createElement("a")
                    finaloutputlist5.className="finallink"
                    finaloutputlist5.setAttribute("href",maplink+y)
                    finaloutputlist5.innerText="Google Map : ",k.datafetched
                    finallinks.append(finaloutputlist5)

                    

                    
                    
                    
                    break;
                }
                
            }
            
            }
        //triggering the click event  and running the storing function



        let userrequest=document.getElementById("location")
        subbtn.addEventListener("click",(event)=>{
           event.preventDefault();
           storing()
           const location=userrequest.value
            const upperlocation=location.toUpperCase()
           
           

           //for looping the data to find the location in database

          
          
        
            
            
            
            
            // if(data.data[stringi].name === upperlocation){
                
           
            

            // }
            // else{
                
                
          
               
            // }
        
        } )

    
    });
    
    
    

    
    
   





