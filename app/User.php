<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','img','cedula','direccion','tlf','zonaId'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function aventon(){
        return $this->hasmany('App\Aventon','conductorId','id');
    }
    
    public function zona(){
        return $this->belongsTo('App\Zona','zonaId','id');
    }

    public function aventonPasajero(){
        return $this->hasmany('App\Aventon_pasagero','pasageroId','id');
    }
    
}
