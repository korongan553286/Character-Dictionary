<h2>Edit Character</h2>

<form action="/characters/{{ $character->id }}" method="POST">

@csrf
@method('PUT')

<input name="name" value="{{ $character->name }}">

<input name="ability" value="{{ $character->ability }}">

<input name="group" value="{{ $character->group }}">

<button type="submit">Update</button>

</form>