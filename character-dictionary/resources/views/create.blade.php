<h2>Create Character</h2>

<form action="/characters" method="POST">

@csrf

<input name="name" placeholder="Name">

<input name="ability" placeholder="Ability">

<input name="group" placeholder="Group">

<button type="submit">Save</button>

</form>