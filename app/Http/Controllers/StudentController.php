<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Trade;

class StudentController extends Controller
{
    public function show()
    {
        $trades = Trade::all();
        return view('index', compact('trades'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'matric_number' => 'required|string|unique:students,matric_number',
            'email' => 'required|email|unique:students,email',
            'phone_number' => 'required|string',
            'department' => 'required|string',
            'level' => 'required|integer',
            'trade_id' => 'required|exists:trades,id',
        ]);

        Student::create($validated);

        return redirect()->route('home')->with('success', 'Registration successful!');
    }
}
