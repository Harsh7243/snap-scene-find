
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function SearchFilters() {
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");
  const [dateRange, setDateRange] = useState<Date | undefined>(undefined);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="glass-card p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Location"
            className="pl-9"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <Select value={eventType} onValueChange={setEventType}>
          <SelectTrigger>
            <SelectValue placeholder="Event Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wedding">Wedding</SelectItem>
            <SelectItem value="portrait">Portrait</SelectItem>
            <SelectItem value="event">Event</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="baby">Baby Photoshoot</SelectItem>
            <SelectItem value="prewedding">Pre-Wedding</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !dateRange && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange ? format(dateRange, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dateRange}
              onSelect={setDateRange}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div>
          <div className="flex justify-between mb-2 text-sm">
            <span>Price Range</span>
            <span>${priceRange[0]} - ${priceRange[1]}</span>
          </div>
          <Slider
            defaultValue={[0, 1000]}
            max={3000}
            step={50}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
          />
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <Button className="px-8">
          <Search className="mr-2 h-4 w-4" />
          Find Photographers
        </Button>
      </div>
    </div>
  );
}
