<?php

namespace App\Observers;

use Illuminate\Support\Facades\Auth;

use App\Artwork;

class ArtworkObserver
{
    /**
     * Handle the Artwork "created" event.
     *
     * @param  \App\Models\Artwork  $artwork
     * @return void
     */
    public function created(Artwork $artwork)
    {
        $artwork->user_id = Auth::id();
        $artwork->slug = $artwork->slug  .'-'.$artwork->id;
        $artwork->save();
    }

    /**
     * Handle the Artwork "updated" event.
     *
     * @param  \App\Models\Artwork  $artwork
     * @return void
     */
    public function updated(Artwork $artwork)
    {
        $artwork->unsetEventDispatcher();
        $artwork->slug = $artwork->slug  .'-'.$artwork->id;
        $artwork->save();
    }

    /**
     * Handle the Artwork "deleted" event.
     *
     * @param  \App\Models\Artwork  $artwork
     * @return void
     */
    public function deleted(Artwork $artwork)
    {
        //
    }

    /**
     * Handle the Artwork "restored" event.
     *
     * @param  \App\Models\Artwork  $artwork
     * @return void
     */
    public function restored(Artwork $artwork)
    {
        //
    }

    /**
     * Handle the Artwork "force deleted" event.
     *
     * @param  \App\Models\Artwork  $artwork
     * @return void
     */
    public function forceDeleted(Artwork $artwork)
    {
        //
    }
}
