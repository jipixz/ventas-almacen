<?php
abstract class ClaseConexion{

    #Conexión con la base de datos
    protected function conectaDB(){
        try{
            $Con = new PDO("mysql:host=localhost;dbname=sales;port=3306", "root", "jipixz");
            return $Con;
        }catch(PDOException $Erro){
            return $Erro->getMessage();
        }
    }
}