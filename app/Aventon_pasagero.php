<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aventon_pasagero extends Model
{
    
    protected $fillable = [
        'pasageroId', 'aventonId', 'status_pasagero','status_aventon'
    ];

    public function pasajeros(){
        return $this->hasMany('App\User','id','pasageroId');
    }

    public function aventon(){
        return $this->belongsTo('App\Aventon','aventonId','id');
    }
    public function pasajero(){
        return $this->belongsTo('App\User','pasageroId','id');
    }
}
