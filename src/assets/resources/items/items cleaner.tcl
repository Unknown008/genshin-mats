set items [glob *.png]

foreach item $items {
    if {[string match "Item*" $item]} {
        set newName [string replace $item 0 4]
        puts $newName
        file delete $newName
        file rename $item $newName
    }
}