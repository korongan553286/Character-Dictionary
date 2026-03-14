<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Http\Request;

class CharacterController extends Controller
{

public function index()
{
    $characters = Character::all();
    return view('characters.index', compact('characters'));
}

public function create()
{
    return view('characters.create');
}

public function store(Request $request)
{
    Character::create($request->all());
    return redirect('/characters');
}

public function edit($id)
{
    $character = Character::find($id);
    return view('characters.edit', compact('character'));
}

public function update(Request $request, $id)
{
    $character = Character::find($id);
    $character->update($request->all());

    return redirect('/characters');
}

public function destroy($id)
{
    Character::destroy($id);
    return redirect('/characters');
}

}