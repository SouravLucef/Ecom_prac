const mongoose=require('mongoose');

//now we have to connect to the local dbms of mongoose
mongoose.connect("mongodb://0.0.0.0:27017/e-com")
                        //in new versions localhost is canges to  0.0.0.0