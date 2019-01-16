<?php
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


/*Route::post('/login', 'Auth\LoginController@authenticate');
Auth::routes();*/

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['prefix' => 'ajax'], function() {
    Auth::routes();
    Route::get('/usuario', function () {
        return Auth::user();
    });
    Route::post('/NewAventon','AventonController@store');
    Route::get('/zonas','ZonaController@index');
    Route::get('/aventones','AventonController@index');
    Route::get('/aventones/{aventonId}','AventonController@show');
    Route::post('/aventones/aceptarAventon','AventonController@AceptarAventon');
    Route::post('/aventones/completar','AventonController@TerminarAventon');
    Route::post('/aventones/CancelarAventon','AventonController@CancelarAventon');
    Route::get('/aventon/pendientes','AventonController@historial');
});

Route::get('/{path?}', function () {
    return view('welcome');
});

Route::post('/registro', function(Request $request){
    return $request;
    if($request->hasFile('file')){
        return 'file';//$request->file('file')->store('public');
    }
   

  return 'no file';
});
