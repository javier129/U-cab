<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aventon extends Model
{
    protected $table ="Aventones";

    protected $fillable = [
        'n_pasageros', 'zonaId', 'direccion','conductorId'
    ];

    public function user(){
        return $this->belongsTo('App\User','conductorId','id');
    }

    public function zona(){
        return $this->belongsTo('App\Zona','zonaId','id');
    }


}

