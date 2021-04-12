<?php
include("claseConexion.php");

class claseSales extends ClaseConexion{
    
    #Mostrando datos en un JSON
    public function muestraSales(){
        $BFetch = $this->conectaDB()->query("select * from sales");
        $BFetch->execute();

        $J = [];
        $I = 0;

        while($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id"     =>$Fetch['id'],
                "product"=>$Fetch['product'],
                "price"  =>$Fetch['price'],
                "stock"  =>$Fetch['stock'],
                "status" =>$Fetch['status']
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin: *");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}