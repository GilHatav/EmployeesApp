package server.business;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.UUID;

public class Employee {

    private UUID id;
    private String f_name;
    private String l_name;
    private String email;

    public Employee(){
        this.id = UUID.randomUUID();
    }

    public Employee(@JsonProperty String f_name,
                    @JsonProperty String l_name,
                    @JsonProperty String email) {
        this.id = UUID.randomUUID();
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
    }

    public Employee(@JsonProperty String id,
                    @JsonProperty String f_name,
                    @JsonProperty String l_name,
                    @JsonProperty String email) {
        this.id = UUID.fromString(id);
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
