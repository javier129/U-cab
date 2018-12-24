<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Traslado extends Model
{
    protected $fillable = [
        'conductor', 'puestos', 'puestosLibres','dirrecion','status'
    ];

    public function usuario(){
        return $this->hasMany('App\User','conductor','id');
    }
}
