module brewroute::brewroute {

    use std::string;
    use std::vector;
    use std::option;
    use std::table;
    use std::signer;
    use std::event;


    /// Event for logging batch creation
    struct BatchCreatedEvent has copy, drop, store {
        batch_id: u64,
        creator: address,
    }

    /// Event handle resource
    struct BrewRouteEvents has key {
        batch_created_events: event::EventHandle<BatchCreatedEvent>,
    }

    /// Tea Batch data
    struct TeaBatch has key {
        id: u64,
        origin: string::String,
        farmer: string::String,
        harvest_date: u64,
        processing: string::String,
        owner: address,
        history: vector<string::String>,
    }

    /// Storage for all batches
    struct TeaBatchRegistry has key {
        batches: table::Table<u64, TeaBatch>,
        counter: u64,
    }

    public entry fun initialize(account: &signer) {
        move_to(account, TeaBatchRegistry {
            batches: table::new<u64, TeaBatch>(),
            counter: 0,
        });
        move_to(account, BrewRouteEvents {
            batch_created_events: event::new_event_handle<BatchCreatedEvent>(account),
        });
    }

    public entry fun register_batch(
        account: &signer,
        origin: string::String,
        farmer: string::String,
        harvest_date: u64,
        processing: string::String
    ) {
        let sender = signer::address_of(account);
        let registry = borrow_global_mut<TeaBatchRegistry>(sender);
        let id = registry.counter;

        let batch = TeaBatch {
            id,
            origin,
            farmer,
            harvest_date,
            processing,
            owner: sender,
            history: vector::empty(),
        };

        table::add(&mut registry.batches, id, batch);
        registry.counter = id + 1;

        let events = borrow_global_mut<BrewRouteEvents>(sender);
        event::emit_event(&mut events.batch_created_events, BatchCreatedEvent {
            batch_id: id,
            creator: sender,
        });
    }

    public entry fun add_history(
        account: &signer,
        batch_id: u64,
        note: string::String
    ) {
        let sender = signer::address_of(account);
        let registry = borrow_global_mut<TeaBatchRegistry>(sender);
        let batch = table::borrow_mut(&mut registry.batches, batch_id);
        vector::push_back(&mut batch.history, note);
    }

    public fun get_batch(
        owner: address,
        batch_id: u64
    ): option::Option<TeaBatch> acquires TeaBatchRegistry {
        if (!exists<TeaBatchRegistry>(owner)) {
            return option::none<TeaBatch>();
        };
        let registry = borrow_global<TeaBatchRegistry>(owner);
        if (!table::contains(&registry.batches, batch_id)) {
            return option::none<TeaBatch>();
        };
        option::some(table::borrow(&registry.batches, batch_id))
    }
}