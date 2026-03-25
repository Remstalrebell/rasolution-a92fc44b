import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewProjectDialog = ({ open, onOpenChange }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Neues Projekt erstellen</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 py-2">
        <div className="space-y-2">
          <Label htmlFor="name">Projektname</Label>
          <Input id="name" placeholder="z.B. Website Relaunch" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="kunde">Kunde</Label>
          <Input id="kunde" placeholder="Firmenname" />
        </div>
        <div className="space-y-2">
          <Label>Status</Label>
          <Select defaultValue="geplant">
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="geplant">Geplant</SelectItem>
              <SelectItem value="in-bearbeitung">In Bearbeitung</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter className="gap-2">
        <Button variant="outline" onClick={() => onOpenChange(false)}>Abbrechen</Button>
        <Button onClick={() => { console.log("Projekt gespeichert"); onOpenChange(false); }}>Speichern</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default NewProjectDialog;
