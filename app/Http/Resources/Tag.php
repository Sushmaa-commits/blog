<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use Mtownsend\ReadTime\ReadTime;

class Tag extends JsonResource
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
            'name' => $this->name,
            'slug' => $this->slug,
            'readTime' => (new ReadTime($this->description))->get(),
            'description' => $this->description,
            'shortdescription' => $this->shorter(strip_tags($this->description), 80),
            'image' =>'\\storage\\'.$this->image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
