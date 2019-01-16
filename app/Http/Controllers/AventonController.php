<?php

namespace App\Http\Controllers;

use App\Aventon;
use App\Aventon_pasagero;
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
        $aventon->status=1;
        $aventon->save();
        return response()->json([
           'create'=>true
        ],200);
    }
    
    public function historial(Request $request)
    {
        $pasajeros=[];
        $aventonConductor= Aventon::with('user','zona')->where('conductorId',Auth::id())->where('status',1)->get();
        if(count($aventonConductor)>0){
            foreach ($aventonConductor[0]->aventonPasagero as $value) {
                $pasajeros[]=$value->pasajero;
            }
            $aventonConductor[0]['pasageros']=$pasajeros;
           return response()->json([
            'aventon'=>$aventonConductor,
            'tipo'=>1
         ]);
        }else{
            $pasageroA=[];
            $aventonPasagero=[];
            $pasagero= Aventon_pasagero::where('pasageroId',Auth::id())->where('status_pasagero',1)->get();
            if(count($pasagero)>0){
                $aux=$pasagero[0]->aventon;
                $aux['user']->user;
                $aux['zona']=$pasagero[0]->aventon->zona;
                $aventonPasagero[] = $aux;
                $pasageroA[]= $pasagero;
                return response()->json([
                    'pasagero'=>$pasageroA,
                    'aventon'=>$aventonPasagero,
                    'tipo'=>2
                 ]);
            }
            return response()->json([
               "error"=>'no hay ninguna pendiente'
             ]);
        }
       // $pasagero= Aventon_pasagero::where('pasageroId',Auth::id())->where('status_pasagero',1)->get();
       /* foreach ($aventon as $aventonaux) {
            $aventon['pasagero']=$aventonaux->aventonPasagero;
        }*/
       // $aventonDatalle->aventonPasagero;
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Aventon  $aventon
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $aventonDatalle= Aventon::with('user','zona')->where('id',$request->aventonId)->get();
        return response()->json([
           'aventon'=>$aventonDatalle,
            'id'=>$request->aventonId,
            'ff'=>'njbjb'
        ]);
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

    public function AceptarAventon(Request $request){
        $aventonPageros = Aventon_pasagero::where('aventonId',$request->avetonId)->where('status_pasagero',1)->count();
        $aventon= Aventon::find($request->avetonId);
        if( $aventonPageros+1 > $aventon->n_pasageros){
            return response()->json([
                'create' => 'false'
            ]);
        }else{
            $aventonPagero= new Aventon_pasagero;
            $aventonPagero->pasageroId= Auth::id();
            $aventonPagero->aventonId=$request->avetonId;
            $aventonPagero->status_pasagero=1;
            $aventonPagero->save();
            return response()->json([
                'create' => 'true',
                'aventonPageros'=>$aventonPageros,
                'n_pasageros'=>$aventon->n_pasageros
            ]);
        }
      
      
    }

    public function TerminarAventon(Request $request){
        $aventonPagero = Aventon_pasagero::where('aventonId',$request->aventonId)->where('pasageroId',Auth::id());
       
        if($aventonPagero->update(['status_pasagero'=>2])){ 
            $aventonPageros = Aventon_pasagero::where('aventonId',$request->aventonId)->count();
            $aventon= Aventon::find($request->aventonId);
            if($aventonPageros==$aventon->n_pasageros){
                $aventon->update(['status'=>2]);
            }
            return response()->json([ 
                'updated'=> 'true',
                'aventonPageros'=>$aventonPageros,
                'n_pasageros'=>$aventon->n_pasageros
            ]);
        }
    }

    public function CancelarAventon(Request $request){
        $aventonPagero = Aventon_pasagero::where('aventonId',$request->aventonId)->where('pasageroId',Auth::id());
        $aventonPagero->update(['status_pasagero'=>3]);
        return response()->json([ 
            'updated'=> 'true',
        ]);

    }
    public function CancelarAventonConductor(Request $request){
        $Aventon = Aventon::where('id',$request->aventonId);
        $Aventon->update(['status'=>3]);
        return response()->json([ 
            'updated'=> 'true',
        ]);

    }
}
