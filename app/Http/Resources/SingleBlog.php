<?php

namespace App\Http\Resources;

use Mtownsend\ReadTime\ReadTime;

use App\Http\Resources\User;
use Illuminate\Http\Resources\Json\JsonResource;

class SingleBlog extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'readTime' => (new ReadTime($this->body))->get(),
            'body' => $this->body,
            'user' => new User($this->user),
            'slug'=> $this->slug,
            'image' =>'\\storage\\'.$this->image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
