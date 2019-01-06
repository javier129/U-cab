<?php

namespace App\Http\Controllers;

use App\Aventon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AventonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $aventones= Aventon::all();
        foreach ($aventones as $aventon) {
            $aventon['usuario']=$aventon->user;
            $aventon['zona']=$aventon->zona;
        }
        return response()->json([
            'aventones' => $aventones
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $zona=$request->zona;
        $destino=$request->destino;
        $pasajeroNum=$request->pasajeroNum;

        $aventon= new Aventon;
        $aventon->n_pasageros=$pasajeroNum;
        $aventon->direcion=$destino;
        $aventon->zonaId=$zona;
        $aventon->conductorId=Auth::id();
        $aventon->save();
        return response()->json([
           'create'=>true
        ],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Aventon  $aventon
     * @return \Illuminate\Http\Response
     */
    public function show(Aventon $aventon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Aventon  $aventon
     * @return \Illuminate\Http\Response
     */
    public function edit(Aventon $aventon)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Aventon  $aventon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Aventon $aventon)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Aventon  $aventon
     * @return \Illuminate\Http\Response
     */
    public function destroy(Aventon $aventon)
    {
        //
    }
}
