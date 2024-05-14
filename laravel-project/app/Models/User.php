<?php

namespace App\Models;

use App\Traits\HandleImageTrait;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Model implements Authenticatable
{
    use HasFactory, Notifiable;
    use HandleImageTrait, HasRoles;

    protected $fillable = [
        'name',
        'gender',
        'address',
        'email',
        'phone',
        'username',
        'password',
        'googleId',
        'facebookId'
    ];
    
    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
    
    // Triển khai các phương thức của giao diện Authenticatable
    public function getAuthIdentifierName()
    {
        return 'id';
    }

    public function getAuthIdentifier()
    {
        return $this->getKey();
    }

    public function getAuthPassword()
    {
        return $this->password;
    }

    public function getRememberToken()
    {
        return $this->remember_token;
    }

    public function setRememberToken($value)
    {
        $this->remember_token = $value;
    }

    public function getRememberTokenName()
    {
        return 'remember_token';
    }
    public function getAuthPasswordName()
    {
        return 'password'; // return the name of the password field
    }
}