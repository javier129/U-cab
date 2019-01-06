<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAventonPasagerosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aventon_pasageros', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('pasageroId');
            $table->integer('aventonId');
            $table->boolean('status_pasagero');
            $table->boolean('status_aventon');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aventon_pasageros');
    }
}
